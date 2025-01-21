const ButtonUrlRenderer = (data) => {
    if (!data) {
        return '/';
    }
    if (data.linktype && data.linktype == 'story') {
        const anchor = data.anchor ? `#${data.anchor}` : '';
        if (data.story) {
            return `/${data?.story?.full_slug}${anchor}` || '/';
        }
    }
    if (data.linktype && data.linktype == 'asset') {
        if (data.url) {
            return data?.url.replace('https://a.storyblok.com/f/269997/', `${process.env.BASE_URL ? process.env.BASE_URL : 'https://stadler-prototyping-git-next-no-typescript-stadler-rail.vercel.app'}/api/docs/`) || '/';
        }
        if (data.fieldtype) {
            return data?.filename || '/';
        }
        return '/';
    }
    if (data.fieldtype && data.fieldtype == 'asset') {
        if (data.filename) {
            return data?.filename.replace('https://a.storyblok.com/f/269997/', `${process.env.BASE_URL ? process.env.BASE_URL : 'https://stadler-prototyping-git-next-no-typescript-stadler-rail.vercel.app'}/api/docs/`) || '/';
        }
        return '/';
    }
    if (data.linktype && data.linktype == 'url') {
        return data?.url || '/';
    }
    // if (data.linktype && data.fieldtype == 'asset') {
    //     return data?.filename;
    // }
    // if (data.fieldtype && data.fieldtype == 'asset') {
    //     return data?.filename;
    // }
    if (data.linktype && data.linktype == 'email') {
        return data?.url || '/';
    }
    return '/';
};

export default ButtonUrlRenderer;
