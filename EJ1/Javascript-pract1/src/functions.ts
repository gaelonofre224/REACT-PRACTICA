const estudiante = 
{
    name: 'test',
    lastname: 'clase',

    getFullName: function()
    {
        console.log(this.name, this.lastname)
    },
    getName: function()
    {
        const name = () => 
        {
            return this.name
        }
        return name
    }
}
estudiante.getFullName()
estudiante.getName()