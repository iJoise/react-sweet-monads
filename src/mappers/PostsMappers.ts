import { PostsEntity } from "../domain/entities/posts/PostsEntity";
import { PostResponseType } from "../types/index";

export class PostsMappers {
  static mapperPostsToStore(posts: PostsEntity[]): PostResponseType[] {
    return posts.map((post) => ({
      title: post.title,
      body: post.body,
      id: post.id,
      userId: post.userId
    }));
  }
}
