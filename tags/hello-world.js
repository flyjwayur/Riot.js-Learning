riot.tag2('hello-world', '<p> {opts.greet} <trim value="{what}" length="3">!</p>', '', '', function(opts) {
  this.what = "Hoodie"
});

riot.tag2('trim', '<span>{opts.value.substr(0, opts.length)}</span>', '', '', function(opts) {
});
