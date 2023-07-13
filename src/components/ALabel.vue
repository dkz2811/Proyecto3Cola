<template>
    <div>
        <span>{{ title }} {{ value }}</span>
    </div>
</template>
<script>
export default {
    name:"ALabel",
    props:{
        title:{
            typeof:String, 
            required:true,
            default:"Label"
        },
        value:{ type:Number,
                required:false, 
                }
        }
        }
    </script>