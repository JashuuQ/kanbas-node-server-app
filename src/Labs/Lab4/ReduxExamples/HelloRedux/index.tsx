import { useSelector, useDispatch } from "react-redux";

export default function HelloRedux() {
  const { message } = useSelector((state: any) => state.helloReducer);
  return (
    <div id="wd-hello-redux">
      <h5>Hello Redux</h5>
      <h6>{message}</h6>
      <hr />
    </div>
  );
}
