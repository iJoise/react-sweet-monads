import { PostsEntity } from "./PostsEntity";

export class PostsListingEntity {
  private readonly _posts: PostsEntity[] = [];

  get posts(): PostsEntity[] {
    return this._posts;
  }

  addPosts(post: PostsEntity): PostsListingEntity {
    this.posts.push(post);
    return this;
  }
}
