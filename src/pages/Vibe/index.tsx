import { useState, useEffect } from 'react'
import {
    useParams
  } from "react-router-dom";
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import awsExports from "../../aws-exports";
import { getVibe } from '../../graphql/queries';
Amplify.configure(awsExports);


export default function Vibe() {
  const { vibename } : { vibename: string } = useParams();
  const [vibe, setVibe] = useState();

  async function getAndSetVibe(name: string) {
    try {
      const {
        // @ts-ignore
        data: { getVibe: currentVibe }
      } = await API.graphql(graphqlOperation(getVibe, {name}))
  
      setVibe(currentVibe)
    } catch(e) {
      console.info('Error in get and set vibe')
      console.error(e)
    }
  }

  // getVibeById
  useEffect(() => {
    getAndSetVibe(vibename);
  }, [vibename])

  return <pre>{JSON.stringify(vibe, null, 4)}</pre>
}
