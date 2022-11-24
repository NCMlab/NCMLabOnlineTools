function PutStimIntoTable(prompt, stim) {
    var html = '';
    html += '<table style="height:100%; text-align:center">'
    html += '<tr style="height:15%">'
    html += '<td>'
    html += prompt
    html += '</td>'
    html += '</tr>'
    html += '<tr>'
    html += '<td>'
    html += stim
    html += '</td>'
    html += '</tr>'
    html += '</table>'
    return html
}