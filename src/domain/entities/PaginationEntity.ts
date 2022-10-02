export type PaginationLimit = number;
export type PaginationPage = number;

export class PaginationEntity {
  constructor(
    private readonly _limit: PaginationLimit = 10,
    private readonly _page: PaginationPage = 1
  ) {}

  public get limit(): PaginationLimit {
    return this._limit;
  }

  public get page(): PaginationLimit {
    return this._page;
  }
}
