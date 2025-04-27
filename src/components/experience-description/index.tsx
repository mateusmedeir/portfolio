import { IComponentProps } from '@/libs/interfaces/component-props.interface'
import clsx from 'clsx'

interface ExperienceDescriptionProps extends IComponentProps {
  variant?: 'default' | 'highlight' | 'muted'
}

const ExperienceDescription: React.FC<ExperienceDescriptionProps> = ({
  variant = 'default',
  className,
  children
}) => {
  return (
    <section
      className={clsx(
        'w-full py-10',
        { 'bg-white text-black-200': variant === 'default' },
        { 'bg-black-200 text-white': variant === 'highlight' },
        { 'bg-gray-100 text-black-200': variant === 'muted' },
        className
      )}
    >
      <div className="container flex flex-col gap-4">{children}</div>
    </section>
  )
}

const ExperienceDescriptionHeader: React.FC<IComponentProps> = ({
  className,
  children
}) => {
  return <div className={clsx(className)}>{children}</div>
}

const ExperienceDescriptionTitle: React.FC<IComponentProps> = ({
  className,
  children
}) => {
  return <h2 className={clsx('text-xl font-bold', className)}>{children}</h2>
}

const ExperienceDescriptionContent: React.FC<IComponentProps> = ({
  className,
  children
}) => {
  return (
    <div className={clsx('flex flex-col gap-2', className)}>{children}</div>
  )
}

const ExperienceDescriptionText: React.FC<IComponentProps> = ({
  className,
  children
}) => {
  return <p className={clsx(className)}>{children}</p>
}

const ExperienceDescriptionList: React.FC<IComponentProps> = ({
  className,
  children
}) => {
  return (
    <div className={clsx('flex flex-col gap-1', className)}>{children}</div>
  )
}

const ExperienceDescriptionListHeader: React.FC<IComponentProps> = ({
  className,
  children
}) => {
  return (
    <div className={clsx('flex flex-col gap-1', className)}>{children}</div>
  )
}

const ExperienceDescriptionListTitle: React.FC<IComponentProps> = ({
  className,
  children
}) => {
  return <h3 className={clsx('font-bold text-lg', className)}>{children}</h3>
}

const ExperienceDescriptionListText: React.FC<IComponentProps> = ({
  className,
  children
}) => {
  return <p className={clsx(className)}>{children}</p>
}

const ExperienceDescriptionListContent: React.FC<IComponentProps> = ({
  className,
  children
}) => {
  return (
    <ul className={clsx('list-disc pl-6 flex flex-col gap-2', className)}>
      {children}
    </ul>
  )
}

const ExperienceDescriptionListItem: React.FC<IComponentProps> = ({
  className,
  children
}) => {
  return <li className={clsx(className)}>{children}</li>
}

export {
  ExperienceDescription,
  ExperienceDescriptionHeader,
  ExperienceDescriptionTitle,
  ExperienceDescriptionContent,
  ExperienceDescriptionText,
  ExperienceDescriptionList,
  ExperienceDescriptionListHeader,
  ExperienceDescriptionListTitle,
  ExperienceDescriptionListText,
  ExperienceDescriptionListContent,
  ExperienceDescriptionListItem
}
