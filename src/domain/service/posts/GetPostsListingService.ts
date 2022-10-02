import { Either } from "@sweet-monads/either";
import { AxiosError } from "axios";
import { PostsListingEntity } from "../../entities/posts/PostsListingEntity";
import { ResponseError } from '../../../types';
import { GetPostsLitingUseCase } from "../../ports/internal/posts/GetPostsListingUseCase";
import { LoadPostsListingPort } from "../../ports/outside/posts/LoadPostsListingPort";
import { GetPostsListingCommand } from "../../ports/internal/posts/GetPostsListingCommand";

export class GetPostsListingService implements GetPostsLitingUseCase {
  constructor(private readonly loadPostsListingPort: LoadPostsListingPort) {}

  async getPostsListing(
    command: GetPostsListingCommand
  ): Promise<Either<AxiosError<ResponseError>, PostsListingEntity>> {
    return await this.loadPostsListingPort.loadPostsListing(command);
  }
}
