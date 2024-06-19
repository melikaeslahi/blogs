import { formatDistanceToNow, parseISO } from "date-fns";

const ShowTime=({timestamp})=>{
  let timeAgo =' ';

  if(timestamp){
    const date = parseISO(timestamp);
    const time = formatDistanceToNow(date);

    timeAgo = `${time} ago`;
  }

  return (
    <span>
    <i>{timeAgo}</i>
  </span>
  )
}
export default ShowTime;