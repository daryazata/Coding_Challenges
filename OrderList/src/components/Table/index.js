import TableHead from './TableHead';
import TableRow from './TableRow';
import './style.css';
import customer_data from '../../data/data.json';
import { sort } from '../../util';

const Table = () => {
  const data = JSON.stringify(customer_data);
  const data_obj = JSON.parse(data);

  sort('customer_lastname', data_obj, 'asc');

  const displayTableRow = () =>
    data_obj.map((el) => {
      return <TableRow rowData={el} key={el.id} />;
    });

  return (
    <div className="table-container">
      <TableHead />
      {displayTableRow()}
    </div>
  );
};

export default Table;
