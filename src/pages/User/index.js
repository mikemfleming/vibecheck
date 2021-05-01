import {
  useParams
} from "react-router-dom";

import useSWR from 'swr'

import { getUser } from '../../graphql/queries';
import { API, graphqlOperation } from 'aws-amplify'

function User() {
  const { username } = useParams();
  const { data, error } = useSWR(
    graphqlOperation(getUser, { name: username }),
    () => API.graphql(graphqlOperation(getUser, { name: username }))
  )

  const user = data?.data.getUser

  if (error) return <pre>{JSON.stringify(error, null, 4)}</pre>

  if (!user) return <div>...loading</div>

  return (
    <div>
      <h3>username: {username}</h3>
    </div>
  );
}

export default User