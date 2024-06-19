$(document).ready(function() {
    $('#dataForm').on('submit', function(event) {
        event.preventDefault();

        const title = $('#title').val();
        const description = $('#description').val();
        const color = $('#color').val();
        const startDate = $('#startDate').val();
        const status = $('#status').val();
        const budget = $('#budget').val();

        const task = new Task(title, description, color, startDate, status, budget);

        const entry = $('<li></li>').html(`
            <strong>Title:</strong> ${task.title} <br>
            <strong>Description:</strong> ${task.description} <br>
            <strong>Color:</strong> ${task.color} <br>
            <strong>Start Date:</strong> ${task.date} <br>
            <strong>Status:</strong> ${task.status} <br>
            <strong>Budget:</strong> $${task.budget}
        `);

        $('#entries').append(entry);
        $('#dataForm')[0].reset();
    });
});
