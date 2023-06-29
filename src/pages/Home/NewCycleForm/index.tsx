import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'
import { CyclesContext } from '../../../contexts/CyclesContext'
import { FormContainer, MinutesAmountInput, TaskInput } from './style'

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)

  const { register } = useFormContext()

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        list="task-suggestions"
        placeholder="Dê um nome para seu projeto"
        type="text"
        disabled={!!activeCycle}
        id="task"
        {...register('task')}
      />

      <datalist id="task-suggestions">
        <option value="Projeto 1" />
        <option value="Projeto 2" />
        <option value="Projeto 3" />
      </datalist>

      <label htmlFor="minutesAmount">durante</label>
      <MinutesAmountInput
        placeholder="00"
        type="number"
        id="minutesAmount"
        disabled={!!activeCycle}
        step={5}
        min={5}
        max={60}
        {...register('minutesAmount', { valueAsNumber: true })}
      />

      <span>minutes.</span>
    </FormContainer>
  )
}
