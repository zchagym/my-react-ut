import { reportClick } from "./utils/report";
export default function Button() {
    return <button onClick={() => reportClick("用户点击")}>Click</button>
}
