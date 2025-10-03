
import Song from '../Song'
import { bucketUrl, useAPIMusicList } from '../Data';

function List() {

  const { data, error, loading } = useAPIMusicList(bucketUrl);
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ol>
      {
        data.map((item, index) => (
          <li key={index}>
            <Song url={item} />
          </li>
        ))
      }
    </ol>
  )
}

export default List
