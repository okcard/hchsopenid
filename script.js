document.getElementById('queryForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const studentId = document.getElementById('studentId').value;
    const studentName = document.getElementById('studentName').value;
    
    fetch('data.csv')
        .then(response => response.text())
        .then(data => {
            Papa.parse(data, {
                complete: function(results) {
                    const student = results.data.find(row => 
                        row[0] === studentId && row[1] === studentName
                    );
                    
                    if (student) {
                        document.getElementById('result').innerHTML = `
                            <p>OpenID: ${student[2]}</p>
                            <p>密碼: ${student[3]}</p>
                        `;
                    } else {
                        document.getElementById('result').innerHTML = '查無資料';
                    }
                }
            });
        });
});
