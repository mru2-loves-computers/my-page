const app = {
    async init() {
        console.log("All Amiga READY");
        this.jq = $;
        this.trigger = this.jq('.trigger');
        this.trigger.on('click',(e)=>{ this.initTrigger(e); });
    },
    async initTrigger(e) {
        e.preventDefault();
        let target = this.jq(e.currentTarget);     
        if(target.hasClass('menu')) {
            this.initMenu(target);
        }        
    },
    async initMenu(target) {
        let targetLink = target.attr('href');            
        this.jq("#content").load('../pages/'+targetLink+'.html');
    }
}

app.init();