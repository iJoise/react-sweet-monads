import { Either } from "@sweet-monads/either";
import { AxiosError } from "axios";
import { GetPostsListingCommand } from "./GetPostsListingCommand";
import { PostsListingEntity } from "../../../entities/posts/PostsListingEntity";
import { ResponseError } from "../../../../types/index";

export interface GetPostsLitingUseCase {
  getPostsListing(
    command: GetPostsListingCommand
  ): Promise<Either<AxiosError<ResponseError>, PostsListingEntity>>;
}
