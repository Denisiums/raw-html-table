document.addEventListener('DOMContentLoaded', function() {
  console.log('hi');

  const table = document.getElementById('table');

  // size of the table
  const totalRows = 2000;
  const totalCols = 50;
  const maxRowsToDisplay = totalRows; // make it smaller to hide visible rows by css

  // [row[col]]
  for (let rowIndex = 0; rowIndex < totalRows; rowIndex++) {
    const row = document.createElement('tr');
    // to hide exceeded rows
    if (rowIndex > maxRowsToDisplay) {
      row.classList.add('hidden');
    }

    for (let col = 0; col < totalCols; col++) {
      const cell = document.createElement('td');
      const input = document.createElement('input');
      input.setAttribute('type', 'text');
      input.setAttribute('value', `${(rowIndex + 1) * col}`);
      input.classList.add('input');
      cell.appendChild(input);
      row.appendChild(cell);

    }
    table.appendChild(row);
  }

});
