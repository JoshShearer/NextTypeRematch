import React from 'react';
import { Comps_layout_Navigation_Header } from '#src/Comps/layout/Navigation/Header';
import { Comps_layout_Navigation_Footer } from '#src/Comps/layout/Navigation/Footer';
import { Comps_misc_Spinner } from '#src/Comps/misc/Spinner';
import { RootState, Dispatch } from '#src/stores/model';
import { connect } from 'react-redux';

// import { Comps_misc_placeholder } from '#src/Comps';

// import { createStructureSelector } from '#src/selectors/util'
// import { userSelector } from '#src/stores/hooks';

// const defaultProps = {
//   key: 'default',
//   name: '',
// } as {
//   name: string;
//   key?: string;
//   children?: JSX.Element;
// };

// const selector = createStructuredSelector({
//    item: (root) => root.stores,
// })

// export const Comps_layout_App = (_props: typeof defaultProps) => {
//   const props = { ...defaultProps, ..._props };
//   // const selected = useSelector((state) => selector(state, props));

//   return (
//     <div className="Comps_layout_App">
//       <Comps_misc_placeholder>
//         <p>Comps_layout_App</p>
//       </Comps_misc_placeholder>
//     </div>
//   );
// };

export class Comps_layout_App extends React.PureComponent<Props> {
	render() {
		// const { countState } = this.props
		return (
    <div>
      <Comps_layout_Navigation_Header/>
      <Comps_misc_Spinner/>
      <Comps_layout_Navigation_Footer/>

    </div>

    )
	}
}

const mapState = (state: RootState) => ({
	countState: state.count,
})
 
const mapDispatch = (dispatch: Dispatch) => ({
	count: dispatch.count,
})
 
type StateProps = ReturnType<typeof mapState>
type DispatchProps = ReturnType<typeof mapDispatch>
type Props = StateProps & DispatchProps
 
connect(mapState, mapDispatch)(Comps_layout_App)