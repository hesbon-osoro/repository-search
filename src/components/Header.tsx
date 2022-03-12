import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

interface IViewer {
	name: string;
	avatarUrl: string;
}
interface IQueryResult {
	viewer: IViewer;
}

const GET_VIEWER = gql`
	{
		viewer {
			name
			avatarUrl
		}
	}
`;

class GetViewerQuery extends Query<IQueryResult> {}

export const Header: React.FC = () => {
	return (
		<GetViewerQuery query={GET_VIEWER}>
			{({ data, loading, error }) => {
				if (error) {
					return <div className="viewer-error">{error.toString()}</div>;
				}
				if (loading) {
					return <div className="viewer-loading">Loading...</div>;
				}
				if (!data || !data.viewer) {
					return null;
				}
				return (
					<div>
						<img
							src={data.viewer.avatarUrl}
							alt={data.viewer.name}
							className="avatar"
						/>
						<div className="viewer">{data.viewer.name}</div>
						<h1>GitHub repo Search</h1>
					</div>
				);
			}}
		</GetViewerQuery>
	);
};
