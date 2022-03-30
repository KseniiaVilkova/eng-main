let words = [{
        word: 'overload',
        trans: 'перезагрузка'
    },
    {
        word: 'query',
        trans: 'запрос'
    },
    {
        word: 'storage',
        trans: 'хранение'
    },
    {
        word: 'to update',
        trans: 'обновить'
    },
    {
        word: 'user',
        trans: 'пользователь'
    },
    {
        word: 'games',
        trans: 'игры'
    },
    {
        word: 'notes',
        trans: 'заметки'
    },
    {
        word: 'memory',
        trans: 'память'
    },
    {
        word: 'available',
        trans: 'доступный'
    },
    {
        word: 'to count',
        trans: 'считать'
    },
    {
        word: 'to crack',
        trans: 'взломать'
    },
    {
        word: 'defense',
        trans: 'защита'
    },
    {
        word: 'to design',
        trans: 'разрабатывать'
    },
    {
        word: 'drive',
        trans: 'диск'
    },
    {
        word: 'floppy disk',
        trans: 'дискета'
    },

]

function speak(text) {
    const message = new SpeechSynthesisUtterance();
    message.lang = "en-EN";
    message.text = text;
    window.speechSynthesis.speak(message);
}

function write() {
    $('.cards_container').empty()
    var synth = window.speechSynthesis;
    var voices = synth.getVoices();
    for (let item = 0; item < words.length; item++) {
        console.log(words[item])
        $('.cards_container').append(`
            <div class="cards_item">
                <div class="card_word">${words[item].word}</div>
                <div class="card_translate">${words[item].trans}</div>
                <button class="show btn">Show</button>
                <button class="sound btn">Speach</button>
            </div>
        `)
    }
    $('.cards_item').on('click', function(event) {
        console.log(event.target.classList)
        if (event.target.classList.contains('show')) {
            console.log('yea')
            jQuery(this).find('.card_translate').addClass('show');
        }
        if (event.target.classList.contains('sound')) {
            let txt = jQuery(this).find('.card_word').text()
            speak(txt);
        }

    });
    localStorage.setItem('words', JSON.stringify(words))
}

$(function() {
    if (localStorage.getItem('words')) {
        words = JSON.parse(localStorage.getItem('words'))
    }
    write();
    $('#addW').on('click', function(event) {
        words.unshift({
            word: $('#inputs_word').val(),
            trans: $('#inputs_trans').val(),
        })
        write()
        console.log(words)
    })

});