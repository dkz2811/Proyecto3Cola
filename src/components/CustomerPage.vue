<template >
    <div>
        {{ user.name  }}
        {{ user.email  }}
        {{ user.isAdmin  }}
    </div>
</template>
<script>
import store from '../store';

export default {
    name: 'CustomerPage',
    data(){
        return{
            user: store.state.user,      
        }
    },
}
</script>
<style >
    
</style>