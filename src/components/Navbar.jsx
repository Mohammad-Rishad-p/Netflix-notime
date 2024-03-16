import React from "react";
import Buttons from "./Buttons";

const Navbar = () => {
    return (
        <div className="flex justify-between p-5">
            {/*left side */}
            <div>
                {/* logo */}
                <img className=" w-52 h-28"  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAllBMVEUAAADlCRPpCROwBw7sCRTxCRQTAAFjAwnCBxBRAwZ6BQrqCRO+BxA+AgXOCBGtBg6KBQtHAwcIAAAfAQN/gYDdCBJNAwZYWVhTVFSUBgyeBg3KCBGhBg2nBg7WCBK2Bw+EBQteAwhvBAk3AgVRAwcoAgMaAQFoBAghAQMlAQN0BAovAgQ2AQUQAAFgAwh/BQqQkpF1d3ZhWVkOAAAEEElEQVR4nO3Z7VbqOBiG4TZNRSgUlCkKKAgouEVxz/mf3ORNUwiC4MzYOLPWff0hpl88NW0+iCIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgv+StmyTJsCyPTHE6kNI08QzdJs9VFM38feSojqmYPvjnHsoWKTRk31FZ2Up25SAuVKaUXtryRCuVNqSUqh3dNhV5pvyqjfmm/j7pKoqapkIn/rkv5XxS6MhF1JWtLEwxfQiZMDZ0ecVcxXFmE+p4R0nCsYr9qplJ6O+jJaGpUN29hOYgmzBqy5ntP25lD7sInVCNa044l22TN3ei7D5gwDJhnD4dSei30rE0s7iqzaqEe630RMKokNswj6JFagpZJ3zCbHiQUE2ajjw/A/mU+6/mUvVcJlR3A7fPrzMJR1nZGO7lFJchA7qEanKYMD/YV54mtXB/SELd87aeTNixrWIRxe5/GdCFe7Ieo4OE1x/3tQmrFvb3EtrnT/da2+cxHJcwu4vqTWiz5XIFPawjx+dcwriI6k0Y7V7GiyioKqEkqzVh10VU0zpinFAlVMkX3zR+wmzUuRK2Az+TcJC6WzmrL8xRVcK4eP7YHxamE1Op1zsfJIwzbclr6lxCe/ajN65m24T65eiYJjuZ0LGj9XMJe/YAN0AMqEyY2/74WEL1bQnX5b4HT3fdynFpzww54v7HhHaAdjKhG7R9KaG9gcHfM9Xcop9KMx1/eA4nkzyfeL3XQUI17trpoa07l3Cmq14prDKhDDlUe7z/Lj2Y4hz2Fg/e1nMJp+oHhmzRNuFD5vWLtfSHr67lt+tIcYpLuNR1J7yvBjWvdcQ4oUx4bb99nQmvq4CZf0wIVcLq5V9XQtsbqp/o8quETzW30kKO7cpUXzVrCfKpKmHVTA/HpW/Lat8vJGxvGrPBa7+8OV7Cuf0XrpPgqzRewhe9nzAuRvfT8cQMTred9PmEsSwb2hFtP9pLaBdA2mWfWPQDZSttE66LDwlju0Tqv9+/kLCi9xM+SgPRjbKx/sQqhiR0zfST1UTrnyeU1mmbfU8H7xJ3Cef6WEK3mmjJGrbeJpS2uJcwlYlUVi6O7ydc2Iu8y+VklqiCzvJ3CZ+KXcJUycwvU4WMTbc/MjQbm82meu+89ZfLvr+m9Dx/ab33hqPu9DKf2GdtbDLbhCP7+Nkj28FXanYJo6k2uWRt19z95K7XWs0eF7/+zblnL+/DqTn1Mlcm6p2tWx1fPqjRhTTE1CZsXCaj1qyGF931utNc9Vzztr/MDL7/Ip8yA9K8nQScljZH0zzsLPE15O9AznId/poAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8P9weyNub27FTflhPn/6a32j33/+sbUr/v4LL/Y8J7kUhugAAAAASUVORK5CYII=" alt="netflix" />
            </div>

            {/* right side */}
            <div
            className="flex gap-4 items-center">
                {/* signin signup and dropdown */}
                <select className="text-lg border-2 border-red-500 w-24 h-12 text-white bg-red-500 rounded-lg">
                    <option value="english">English</option>
                    <option value="malayalam">Malayalam</option>
                </select>
                <Buttons title='Signup' Link="/signup" />
                <Buttons title='SignIn' Link="/login" />
            </div>
        </div>
    )
}

export default Navbar