const TableRowOrder = ({ el, elItem }) => {
  return (
    <div key={el.id} className="table_row-order-row table_row-item">
      <div className="table_row-item">{el.id}</div>
      <div className="table_row-item">{elItem.title}</div>
      <div className="table_row-item">{elItem.price}</div>
    </div>
  );
};

export default TableRowOrder;
