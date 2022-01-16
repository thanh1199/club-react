


import { Chart } from 'react-google-charts'

function QualificationChart (props) {

  const mode = props.mode
  return (
    <Chart
      width={'100%'}
      height={'100%'}
      chartType="PieChart"
      loader={<div>計算中</div>}
      data={[
      ['評価', '%'],
      ['秀', 10],
      ['優', 20],
      ['良', 30],
      ['可', 40]
      ]}
      options={{
        chartArea: {
          width: '100%',
          height: '85%',
        },
        colors: ['rgb(134, 255, 245)', 'rgb(100, 189, 181)', 'rgb(70, 131, 126)', 'rgb(43, 80, 77)'],
        backgroundColor: mode==="lightMode" ? "white" : "black",
        fontSize: "18",
        pieSliceText: 'none',
        legend: {position: 'labeled', textStyle: {color: 'white', fontSize: "16"}}
      }}
      rootProps={{ 'data-testid': '100' }}
    />
  )
}

export default QualificationChart