exports.seed = function (knex) {
    return knex('esb_chapters').del()
        .then(function () {
        return knex('esb_chapters').insert([
            { title: 'ChapterTest', text: 'ChapterTest', author: 'a294eee9-43e8-4ed8-9f14-40489a062c89' },
        ]);
    });
};
