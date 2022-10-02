import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from './hooks/appHooks';
import { getPosts, PaginationCommand, postsSelector } from './store/slice/postSlice';
import './styles.css';

type PaginationEvent = 'PrevPage' | 'NextPage' | 'IncLimit' | 'DecLimit';

export default function App() {
	const dispatch = useAppDispatch();
	const { posts } = useAppSelector(postsSelector);
	const [pagination, setPagination] = useState<PaginationCommand>({
		limit: 10,
		page: 1
	});

	useEffect(() => {
		dispatch(getPosts(pagination));
	}, [dispatch, pagination]);

	const handleClick = (type: PaginationEvent) => {
		switch (type) {
			case 'PrevPage':
				setPagination(({ limit, page }) => ({ limit, page: page - 1 }));
				break;
			case 'NextPage':
				setPagination(({ limit, page }) => ({ limit, page: page + 1 }));
				break;
			case 'IncLimit':
				setPagination(({ limit, page }) => ({ limit: limit + 5, page }));
				break;
			case 'DecLimit':
				setPagination(({ limit, page }) => ({ limit: limit - 5, page }));
				break;
			default:
				break;
		}
	};

	return (
		<div className="App">
			<button onClick={() => handleClick('PrevPage')}>PrevPage</button>
			<button onClick={() => handleClick('NextPage')}>NextPage</button>
			<button onClick={() => handleClick('IncLimit')}>IncLimit</button>
			<button onClick={() => handleClick('DecLimit')}>DecLimit</button>
			{posts.map((post) => (
				<div key={post.id}>
					<div>{post.title}</div>
					<div style={{ fontSize: 13 }}>{post.body}</div>
					<hr/>
				</div>
			))}
		</div>
	);
}
