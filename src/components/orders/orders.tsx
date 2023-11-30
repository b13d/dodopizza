import React, {useEffect, useState} from "react";
import OrderItem from "../orderItem/orderItem";
import GetData from "../getData/getData";
import axios from "axios";

import {IFrequentlyOrdered} from "../../../interfaces";

export default function Orders() {
    const [data, setData] = useState([])

    // console.log(data);

    useEffect(() => {


        const handleGetData = async () => {
            const data: IFrequentlyOrdered[] = await getOrders();

            console.log(data)

            setData(data)
        }
        handleGetData()

    }, [])

    return (
        <section className="m-auto w-full flex justify-center">
            <div className="w-[1280px]">
                <h1 className="my-4 text-2xl font-semibold">Часто заказывают</h1>
                <div className="flex">
                    {data.map((order) => {
                        return <OrderItem key={order.id} order={order}/>;
                    })}
                </div>
            </div>
        </section>
    );
}

async function getOrders() {
    console.log()

    const api = `http://localhost:3004/frequentlyOrdered`;

    const data = (await axios.get(api)).data;

    console.log(data)

    return data;
}
