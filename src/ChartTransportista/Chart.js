// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/bar
import { ResponsiveBar } from '@nivo/bar'

const theme = {
    axis: {
      fontSize: "16PX",
      tickColor: "#eee",
      ticks: {
        line: {
          stroke: "#555555"
        },
        text: {
          fill: "#ffffff"
        }
      },
      legend: {
        text: {
          fill: "#aaaaaa"
        }
      }
    },
    grid: {
      line: {
        stroke: "#555555"
      }
    }
  };
  

const Chart = ({ data /* see data tab */ }) => (
    <div style={{
         width: '100%', 
         height: '70vh', 
        }}>
        <ResponsiveBar
            data={data}
            theme={theme}
            // layout="horizontal"
            keys={["promedio_minutos"]}
            indexBy="mes"
            margin={{ top: 10, bottom: 60, left: 60, right: 20 }}
            padding={0.4}
            valueScale={{ type: "linear" }}
            colors="#656C85"
            animate={true}
            enableLabel={false}
            axisTop={null}
            axisRight={null}
            axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: "PROMEDIO MINUTOS",
                legendPosition: "middle",
                legendOffset: -45,
            }}
            axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: "MESES",
                legendPosition: "middle",
                legendOffset: 45,
            }}
            labelTextColor="inherit:darker(2.4)"

        />
    </div>
);


export default Chart;