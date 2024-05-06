<script>
    const currentTime = new Date()
    const currentHour = currentTime.getHours()

    let greeting = ""

    if(currentHour > 12) {
        greeting = "Buenos dias"
    } else if (currentHour < 18) {
        greeting = "Buenas tardes"
    } else {
        greetings = "Buenas noches"
    }
</script>

<h1 class="text-2xl font-bold">Escuchado recientemente</h1>