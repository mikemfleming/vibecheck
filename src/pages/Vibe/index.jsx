import useSWR from 'swr'
import {
  useParams
} from "react-router-dom";
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import awsExports from "../../aws-exports";
import { getVibe } from '../../graphql/queries';
import Vibe from '../../components/Vibe'
import Moment from '../../components/Moment'

Amplify.configure(awsExports);

export default function VibePage() {
  const { vibename } = useParams();
  const { data, error } = useSWR(
    graphqlOperation(getVibe, { name: vibename }),
    () => API.graphql(graphqlOperation(getVibe, { name: vibename }))
  )

  const vibe = data?.data.getVibe

  if (error) return <pre>{JSON.stringify(error, null, 4)}</pre>

  if (!vibe) return <div>...loading</div>

  return (
    <>
      <section>
        <Vibe vibe={vibe} />
      </section>
      <section>
        {vibe.moments.items.map(m => <Moment moment={m} />)}
      </section>
    </>
  )
}
