import { storyblokEditable } from '@storyblok/react/rsc'
import H4 from '../typography/H4'
import Text from '../typography/Text'

function CareerStepItem({ blok }) {
  

    return (
        <li className="flex items-center mr-8 text-gray-500 dark:text-gray-400 space-x-2.5 rtl:space-x-reverse" {...storyblokEditable(blok)}>
            <span className="flex items-center text-xl justify-center w-12 h-12 border border-gray-500 rounded-full shrink-0">
            {blok?.step_number}
              </span>
              <span>
                <H4>{blok?.step_title}</H4>
                <Text>{blok?.step_text}</Text>
              </span>
        </li>
    )
}

export default CareerStepItem;
