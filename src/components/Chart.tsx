import * as React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import type { ViewPoint } from "../services/types";
import "../styles/chart.css";
import { formatTime } from "../utils/format";

interface Props {
  data: ViewPoint[];
}

const Chart = ({ data }: Props) => {
  return (
    <div className="chart-container">
      <div className="legend-box">
        <div>X axis : Time in 24Hrs</div>
        <div>Y axis : Total no of views</div>
      </div>
      <ResponsiveContainer minHeight={100} width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <XAxis
            dataKey="timestamp"
            tickFormatter={(tick) => formatTime(tick)}
          />
          <YAxis />
          <Tooltip labelFormatter={(label) => formatTime(label)} />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#666fe3"
            fill="#003663"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default React.memo(Chart);
