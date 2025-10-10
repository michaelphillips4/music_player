
import Song from './Song'
import { bucketUrl} from '../Data';
import useAPIMusicList from '../useAPIMusicList';

function List() {

  const { data, error, loading } = useAPIMusicList(bucketUrl);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ol>
      {
        Object.keys(data).map((key, index) => (
          <li key={index}>
            <Song url={data[key]} name={key} />
          </li>
        ))
      }
    </ol>
  )
}

export default List
