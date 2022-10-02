import { PaginationEntity } from "../../../entities/PaginationEntity";

export class GetPostsListingCommand {
  constructor(private readonly _pagination: PaginationEntity) {}

  get pagination(): PaginationEntity {
    return this._pagination;
  }
}
