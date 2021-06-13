import { Label,Icon } from 'semantic-ui-react'

export const Lable = ()=>{
   return( 
   <Label as='a' color='yellow' image>
      <Icon name='arrow right' />
      Christian
      <Label.Detail>Co-worker</Label.Detail>
    </Label>
   )
}