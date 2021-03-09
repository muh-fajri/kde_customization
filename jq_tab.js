$(document).ready(function() {
    // sembunyikan semua div content
    $('.content section').hide();

    // tampilkan hanya div content pada child pertama
    $('.content section:first').show();

    // saat navigasi left-sidebar diklik
    $('.content-sidebar a').click(function() {
        
        // isi atribut class pada semua navigasi dengan nilai 'inactive'
        $('.content-sidebar a').attr('class','inactive');

        // isi atribut class navigasi yang sedang aktif dengan  nilai 'active'
        $(this).attr('class','active');

        // buat variabel content untuk menampung identitas div content
        var content = '.content section[name="' + this.name + '"]';

        // sembunyikan semua section dari div content
        $('.content section').hide();

        // tampilkan div content dengan identitas yang telah didapatkan
        $(content).slideDown('fast');
    });
});