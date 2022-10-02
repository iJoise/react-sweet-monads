import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
	GetPostsListingCommand
} from '../../domain/ports/internal/posts/GetPostsListingCommand';
import { LoadPostsAdapterService } from '../../adapters/LoadPostsAdapterService';
import {
	GetPostsListingService
} from '../../domain/service/posts/GetPostsListingService';
import { PaginationEntity } from '../../domain/entities/PaginationEntity';
import { PostsMappers } from '../../mappers/PostsMappers';
import { PostResponseType } from '../../types';
import { AppRootStateType } from '../index';

export type PaginationCommand = Readonly<PaginationEntity>;

interface PostsList {
	posts: PostResponseType[];
}

const postInitialState: PostsList = {
	posts: []
};

const postsSlice = createSlice({
	name: 'posts',
	initialState: postInitialState,
	reducers: {
		setPosts: (state, action: PayloadAction<PostResponseType[]>) => {
			state.posts = action.payload;
		}
	}
});

const { setPosts } = postsSlice.actions;
export const postReducer = postsSlice.reducer;

export const getPosts = createAsyncThunk(
	'posts/fetchPosts',
	async (payload: PaginationCommand, thunkAPI) => {
		const loadPostsListingAdapterService = new LoadPostsAdapterService();
		const getListing = new GetPostsListingService(
			loadPostsListingAdapterService
		);
		const pagination = new PaginationEntity(payload.limit, payload.page);
		const command = new GetPostsListingCommand(pagination);
		const response = await getListing.getPostsListing(command);

		if (response.isRight()) {
			const { value } = response;
			const result = PostsMappers.mapperPostsToStore(value.posts);
			thunkAPI.dispatch(setPosts(result));
		}
	}
);

export const postsSelector = (state: AppRootStateType) => state.posts
