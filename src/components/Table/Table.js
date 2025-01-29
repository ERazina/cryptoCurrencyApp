var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React, { useEffect } from "react";
import { Table } from "antd";
import { observer } from "mobx-react-lite";
import { ratesStore } from "@store/RatesStore";
// const columns = [
//   {
//     title: "Name",
//     dataIndex: "name",
//     key: "name",
//   },
//   {
//     title: "Ask",
//     dataIndex: "ask",
//     key: "ask",
//   },
//   {
//     title: "Bid",
//     dataIndex: "bid",
//     key: "bid",
//   },
//   {
//     title: "diff24h",
//     dataIndex: "diff24h",
//     key: "diff24h",
//   },
//   {
//     title: "Rate",
//     dataIndex: "rate",
//     key: "rate",
//   },
// ];
var StyledTable = observer(function () {
    useEffect(function () {
        if (Object.keys(ratesStore.rates).length === 0 && !ratesStore.isLoading) {
            ratesStore.fetchRates();
        }
    }, []);
    var dataSource = Object.entries(ratesStore.rates).map(function (_a, index) {
        var key = _a[0], value = _a[1];
        return (__assign({ key: index, name: key }, value));
    });
    var columns = Object.keys(ratesStore.rates || {}).map(function (key) { return ({
        title: key.toUpperCase(),
        dataIndex: key,
        key: key,
    }); });
    console.log(columns);
    return (React.createElement(Table, { dataSource: dataSource, columns: columns, loading: ratesStore.isLoading, pagination: { pageSize: 10, showSizeChanger: true } }));
});
export default StyledTable;
