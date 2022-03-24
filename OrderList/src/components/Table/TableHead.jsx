import './style.css';

const headerData = [
  'Vorname',
  'Nachname',
  'Bestellung',
  'Artikelbeschreibung',
  'Preis',
];

const TableHead = () => {
  const displayHeader = () =>
    headerData.map((el, index) => (
      <div key={index} className="table_header-title-container">
        {el}
      </div>
    ));

  return <div className="table_header-container">{displayHeader()}</div>;
};

export default TableHead;
