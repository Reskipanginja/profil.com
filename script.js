function loginToSocialMedia(platform) {
    let url;
    switch (platform) {
        case 'instagram':
            url = 'https://www.instagram.com/rski___1/?igsh=MTdiN3htbjhua2ZiZw%3D%3D';
            break;
        default:
            alert('Platform tidak dikenal');
            return;
    }
    window.open(url, '_blank');
}
