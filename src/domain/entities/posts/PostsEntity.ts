export class PostsEntity {
  constructor(
    private readonly _userId: number,
    private readonly _id: number,
    private readonly _title: string,
    private readonly _body: string
  ) {}

  get userId(): number {
    return this._userId;
  }

  get id(): number {
    return this._id;
  }

  get title(): string {
    return this._title;
  }

  get body(): string {
    return this._body;
  }
}
