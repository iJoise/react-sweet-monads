import { Either } from "@sweet-monads/either";
import { AxiosError } from "axios";
import { ResponseError } from "../../../types";
import { GetPostsListingCommand } from "../internal/posts/GetPostsListingCommand";

export interface LoadPostsListingPort {
  loadPostsListing(
    command: GetPostsListingCommand
  ): Promise<Either<AxiosError<ResponseError>, string>>;
}
