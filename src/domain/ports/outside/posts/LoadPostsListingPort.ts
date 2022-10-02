import { Either } from "@sweet-monads/either";
import { AxiosError } from "axios";
import { ResponseError } from "../../../../types/index";
import { PostsListingEntity } from "../../../entities/posts/PostsListingEntity";
import { GetPostsListingCommand } from "../../internal/posts/GetPostsListingCommand";

export interface LoadPostsListingPort {
  loadPostsListing(
    command: GetPostsListingCommand
  ): Promise<Either<AxiosError<ResponseError>, PostsListingEntity>>;
}
