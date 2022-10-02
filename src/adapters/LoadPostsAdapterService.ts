import { instance } from "../plugins/axios";
import { LoadPostsListingPort } from "../domain/ports/outside/posts/LoadPostsListingPort";
import { GetPostsListingCommand } from "../domain/ports/internal/posts/GetPostsListingCommand";
import { Either, left, right } from "@sweet-monads/either";
import { AxiosError } from "axios";
import { PostResponseType, ResponseError } from "../types";
import { PostsEntity } from "../domain/entities/posts/PostsEntity";
import { PostsListingEntity } from "../domain/entities/posts/PostsListingEntity";

export class LoadPostsAdapterService implements LoadPostsListingPort {
  private async getDataApi(
    command: GetPostsListingCommand
  ): Promise<Either<AxiosError<ResponseError>, PostResponseType[]>> {
    try {
      const params = {
        _limit: command.pagination.limit,
        _page: command.pagination.page
      };
      const { data } = await instance.get("/posts", { params });

      return right(data);
    } catch (e) {
      return left(e as AxiosError<ResponseError, any>);
    }
  }

  async loadPostsListing(
    command: GetPostsListingCommand
  ): Promise<Either<AxiosError<ResponseError>, PostsListingEntity>> {
    const postsListingEntity = new PostsListingEntity();
    const response = await this.getDataApi(command);

    return response
      .mapLeft((err) => err)
      .mapRight((res) => {
        res.forEach((post) => {
          postsListingEntity.addPosts(
            new PostsEntity(post.userId, post.id, post.title, post.body)
          );
        });
        return postsListingEntity;
      });
  }
}
