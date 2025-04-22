const combinedImageRenderer = (data, transformation = '/m/332x250') => {
    if (!data) return '/';

    let url = '/';

    if (data.linktype && data.linktype === 'asset') {
        if (data.url) {
            url = data.url.replace(
                'https://a.storyblok.com/f/269997/',
                `${process.env.BASE_URL ? process.env.BASE_URL : 'https://stadlerrail.com'}/api/docs/`
            );
        } else if (data.fieldtype) {
            url = data.filename || '/';
        }
    } else if (data.fieldtype && data.fieldtype === 'asset') {
        if (data.filename) {
            url = data.filename.replace(
                'https://a.storyblok.com/f/269997/',
                `${process.env.BASE_URL ? process.env.BASE_URL : 'https://stadlerrail.com'}/api/docs/`
            );
        }
    }

    if (url !== '/' && data.filename) {
        url += transformation;
        if (data.focus) {
            url += `/filters:focal(${data.focus})`;
        }
    }

    return url;
};

export default combinedImageRenderer;
