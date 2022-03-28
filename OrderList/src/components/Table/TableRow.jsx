import { sort } from '../../util';
import './style.css';
import TableRowOrder from './TableRowOrder';

const TableRow = ({ rowData }) => {
  sort('id', rowData.orders, 'asc');
  const displayOrders = rowData.orders.map((el) => {
    sort('price', el.items, 'desc');
    return el.items.map((elItem) => {
      return <TableRowOrder key={el.id + elItem.id} el={el} elItem={elItem} />;
    });
  });
  return (
    <div className="table_row-container">
      <div className="table_row-item-customer">
        <div className="table_row-item">{rowData.customer_firstname}</div>
        <div className="table_row-item">{rowData.customer_lastname}</div>
      </div>
      {/* orders */}
      {displayOrders}
    </div>
  );
};

export default TableRow;
