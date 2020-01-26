import { connect } from "react-redux";
import Filter from "../components/Filter";
import { changeFilter } from "../actions";

const mapStateToProps = state => {
  return {
    filter: state.filter.toString()
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFilterChange: filter => {
      dispatch(changeFilter(filter));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
