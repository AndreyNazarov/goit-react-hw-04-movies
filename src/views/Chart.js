import { Route, useHistory } from 'react-router-dom';
import { useState, useEffect, lazy, Suspense } from 'react';
import usersStatistics from '../mock/users_statistic.json';
import { Line } from 'react-chartjs-2';
import 'moment/locale/fr.js';
import 'moment/locale/it.js';
import { DatePicker } from 'rc-datepicker';
import 'rc-datepicker/lib/style.css';
const date = Date.now();
const styles = {
  calendar: {
    // height: 20,
    width: 10,
    backgroundColor: 'black',
  },
};

export default function Charts() {
  let history = useHistory();
  const userId = history.location.state;
  useEffect(() => {
    !userId && history.goBack();
  }, [userId]);
  const [value, onChange] = useState(new Date());

  // console.log(usersStatistics.filter(user => user.user_id === userId));
  const filteredData = usersStatistics.filter(user => user.user_id === userId);
  // console.log(filteredData);

  return (
    <>
      <button type="button" onClick={() => history.push('/')}>
        Go home
      </button>
      <h1>Users statistics</h1>
      <h3>Clicks</h3>

      <DatePicker
        onChange={onChange}
        value={value}
        className="my-custom-datepicker-component"
        // {...anyReactInputProps}
      />

      <Line
        data={{
          labels: [
            'November',
            'December',
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
          ],
          // filteredData.map(data =>
          //   {
          //   const date = new Date(data.date);
          //   let shortMonth = date.toLocaleString('en-us', { month: 'short' });
          //   return shortMonth;}
          //   ),
          datasets: [
            // filteredData.map((data, index) => (
            //   <div key={index}>
            //     <p>Date {data.date} </p>
            //     <p>Page views{data.page_views} </p>
            //     <p> Clicks {data.clicks}</p>
            //   </div>
            // ))
            // console.log(filteredData.map(data => data.page_views))
            {
              label: '# of Votes',
              data: filteredData.map(data => data.page_views),
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
            },
          ],
          options: {
            maintainAspectRatio: false,
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          },
        }}
        height={50}
        // width={100}
      />
      {/* <div>
        {filteredData.map((data, index) => (
          <div key={index}>
            <p>Date {data.date} </p>
            <p>Page views{data.page_views} </p>
            <p> Clicks {data.clicks}</p>
          </div>
        ))}
      </div> */}
      <hr />
      <h1>Footer</h1>
    </>
  );
}
